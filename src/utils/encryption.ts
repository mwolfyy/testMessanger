import { box, randomBytes } from 'tweetnacl';
import { decodeBase64, encodeBase64, encodeUTF8, decodeUTF8 } from 'tweetnacl-util';

export class E2EEncryption {
  private keyPair: { publicKey: Uint8Array; secretKey: Uint8Array };

  constructor() {
    this.keyPair = box.keyPair();
  }

  getPublicKey(): string {
    return encodeBase64(this.keyPair.publicKey);
  }

  async encryptMessage(message: string, recipientPublicKey: string): Promise<string> {
    const ephemeralKeyPair = box.keyPair();
    const nonce = randomBytes(box.nonceLength);
    const encodedMessage = decodeUTF8(message);
    
    const encryptedMessage = box(
      encodedMessage,
      nonce,
      decodeBase64(recipientPublicKey),
      this.keyPair.secretKey
    );

    return encodeBase64(
      new Uint8Array([...nonce, ...ephemeralKeyPair.publicKey, ...encryptedMessage])
    );
  }

  async decryptMessage(encryptedData: string, senderPublicKey: string): Promise<string> {
    const messageWithNonce = decodeBase64(encryptedData);
    const nonce = messageWithNonce.slice(0, box.nonceLength);
    const message = messageWithNonce.slice(
      box.nonceLength + box.publicKeyLength
    );
    
    const decrypted = box.open(
      message,
      nonce,
      decodeBase64(senderPublicKey),
      this.keyPair.secretKey
    );

    if (!decrypted) {
      throw new Error('Failed to decrypt message');
    }

    return encodeUTF8(decrypted);
  }
}