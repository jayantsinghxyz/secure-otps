import { randomInt } from "crypto";

export class SecureOtps {
  private min: number;
  private max: number;

  constructor(private readonly length: number) {
    this.min = parseInt("0".padEnd(length, "0"));
    this.max = parseInt("9".padEnd(length, "9"));
  }

  public generate(): string {
    return randomInt(this.min, this.max).toString().padStart(this.length, "0");
  }
}
