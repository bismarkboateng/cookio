export type AddRecipeToFireStoreProps = {
  formValues: {
    title: string;
    description: string;
    tags: string;
  };
  category: string;
  instructions: string[];
  imageUrl: string;
  isPublic: boolean;
  email: string;
};

export type handleAddRecipeProps = {
  url: string;
  formValues: {
    title: string;
    description: string;
    tags: string;
  };
  category: string;
  instructions: string[];
  email: string | undefined;
};

export type handleUpdateRecipeProps = {
  image: string | File | null;
  uploadedUrl: string;
  id: string | undefined;
  formValues: {
    title: string;
    description: string;
    tags: string;
  };
  category: string;
  instructions: string[];
};