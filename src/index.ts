import { randomInt } from "crypto";

export default class SecureOtps {
  private min: number;
  private max: number;

  constructor(private readonly length: number) {
    this.min = parseInt("0".padEnd(length, "0"));
    this.max = parseInt("9".padEnd(length, "9"));
    console.log(this.min, this.max);
  }

  public generate(): string {
    return randomInt(this.min, this.max).toString();
  }
}

console.log("new SecureOtps(4).generate()", new SecureOtps(1).generate());
