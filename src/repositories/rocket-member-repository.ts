export abstract class RocketMemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
