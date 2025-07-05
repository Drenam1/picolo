import { Topic } from "../constants/topic";

export enum QuestionType {
  Standard = "standard",
  Rule = "rule",
  Categories = "categories",
  UmActually = "umActually",
}

export interface Question {
  type: QuestionType;
  startString: string;
  endString?: string;
  topics?: Topic[];
}
