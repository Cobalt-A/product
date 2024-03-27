import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICartProduct, IProduct } from "@shared/model/types/product";
import { getProduct } from "../api/api";

interface ProductState {
  product: IProduct | undefined;
  productLoading: boolean;
  productError: boolean;
  productsCart: ICartProduct[];
}

const initialState: ProductState = {
  product: undefined,
  productLoading: false,
  productError: false,
  productsCart: [],
};

export const productSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.product = action.payload;
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.productLoading = action.payload;
    },
    setProductError: (state, action: PayloadAction<boolean>) => {
      state.productError = action.payload;
    },
    setProductsCart: (state, action: PayloadAction<ICartProduct[]>) => {
      state.productsCart = action.payload;
    },
  },
});

export const fetchProduct = createAsyncThunk<IProduct | undefined, undefined>(
  "/api/society/organization/id",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(productSlice.actions.setProductLoading(true));
      thunkAPI.dispatch(productSlice.actions.setProductError(false));
      const response = getProduct(); // типо асинхронная функция
      thunkAPI.dispatch(productSlice.actions.setProduct(response));
      thunkAPI.dispatch(productSlice.actions.setProductLoading(false));
      return response;
    } catch (error) {
      thunkAPI.dispatch(productSlice.actions.setProductLoading(false));
      thunkAPI.dispatch(productSlice.actions.setProductError(true));
      console.log(error);
    }
  }
);

export default productSlice.reducer;
