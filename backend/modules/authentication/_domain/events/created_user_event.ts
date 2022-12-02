import { IDomainEvent } from "../../../../core/interfaces/domain_event";

export default class CreatedUserEvent extends IDomainEvent {
  private _userId: string;

  constructor(id: string) {
    super();
    this._userId;
  }

  get userId(): string {
    return this._userId;
  }
}
