type Listing = {
  id: string;
  name: string;
  notes: string;
  address: string;
  price: number;
  location: string;
  water:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  gas:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  electricity:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  trash:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  wifi:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  parking:
    | { status: "included" | "unknown" }
    | { status: "separate"; estimate?: number };
  laundromatType: "NONE" | "IN_UNIT" | "SHARED";
  numBedrooms: number;
  numBathrooms: number;
  numSharedBathrooms: number;
  squareFootage: number;
  bedrooms: Array<{
    id: string;
    name: string;
    size: number;
    hasBathroom: boolean;
  }>;
};
type Priority = {
  id: string;
  name: string;
  description: string;
  weight: number;
};
type DealBreaker =
  | {
      id: string;
      name: string;
      type: "rule";
      field: keyof Listing;
      operator: "equals" | "not_equals" | "greater_than" | "less_than";
      value: string | number;
    }
  | {
      id: string;
      name: string;
      type: "ai";
      condition: string;
    };
