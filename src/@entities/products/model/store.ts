import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@shared/model/types/product";
import { getProduct } from "../api/api";

interface ProductState {
  product: IProduct | undefined;
  productLoading: boolean;
  productError: boolean;
}

const initialState: ProductState = {
  product: undefined,
  productLoading: false,
  productError: false
};

export const productSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.product = action.payload;
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.product = action.payload;
    },
    setProductError: (state, action: PayloadAction<boolean>) => {
      state.product = action.payload;
    },
  },
});

export const fetchProduct = createAsyncThunk<IProduct | undefined, number>(
  "/api/society/organization/id",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(productSlice.actions.setProductLoading(true));
      thunkAPI.dispatch(productSlice.actions.setProductError(false));
      const response = await getProduct()
      thunkAPI.dispatch(productSlice.actions.setProduct(response));
      thunkAPI.dispatch(productSlice.actions.setProductLoading(false));
      return response;
    } catch (error) {
      thunkAPI.dispatch(productSlice.actions.setProductLoading(false));
      thunkAPI.dispatch(productSlice.actions.setProductError(true));
    }
  }
);

export default productSlice.reducer;
