# Diamond Price Prediction

![Alt Text](static/Capture.PNG)

📌 **Problem Statement**

This project aims to predict the price of diamonds based on various features such as carat, cut, color, clarity, and other dimensions. The objective is to develop regression models that accurately estimate diamond prices, aiding in valuation and pricing strategies.

📊 **Data Collection**

**Dataset Source**: Kaggle - Playground Series Season 3 Episode 8

### Features Description:

| Feature | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| id      | Unique identifier of each diamond                                                           |
| carat   | Weight measurement unit used exclusively to weigh gemstones and diamonds                    |
| cut     | Quality of diamond cut (e.g., Fair, Good, Very Good, Premium, Ideal)                        |
| color   | Color grade of the diamond (D, E, F, G, H, I, J)                                            |
| clarity | Measure of the purity and rarity of the diamond based on internal inclusions                |
| depth   | Height of the diamond measured from the culet (bottom tip) to the table (flat, top surface) |
| table   | The largest facet on the diamond’s top surface                                              |
| x       | Length of the diamond (in mm)                                                               |
| y       | Width of the diamond (in mm)                                                                |
| z       | Depth of the diamond (in mm)                                                                |
| price   | Target variable: Price of the diamond (in USD)                                              |

**Dataset Summary**:

- Contains multiple features affecting diamond pricing.
- Prices vary based on carat, clarity, and cut quality.

📈 **Model Performance Comparison**

| Model                   | MSE      | RMSE    | MAE    | Train R² | Test R² | Adjusted R² |
| ----------------------- | -------- | ------- | ------ | -------- | ------- | ----------- |
| CatBoost Regressor      | 3.36e+05 | 579.96  | 295.48 | 0.9827   | 0.9792  | 0.9792      |
| XGBRegressor            | 3.42e+05 | 585.44  | 296.96 | 0.9838   | 0.9788  | 0.9788      |
| Random Forest Regressor | 3.71e+05 | 609.35  | 310.42 | 0.9968   | 0.9770  | 0.9770      |
| K-Neighbors Regressor   | 4.49e+05 | 670.78  | 350.55 | 0.9815   | 0.9722  | 0.9721      |
| Decision Tree           | 7.00e+05 | 837.25  | 422.66 | 1.0000   | 0.9566  | 0.9566      |
| Linear Regression       | 1.01e+06 | 1006.60 | 671.58 | 0.9366   | 0.9373  | 0.9373      |
| Ridge                   | 1.01e+06 | 1006.60 | 671.61 | 0.9366   | 0.9373  | 0.9373      |
| Lasso                   | 1.01e+06 | 1006.87 | 672.99 | 0.9366   | 0.9373  | 0.9372      |
| AdaBoost Regressor      | 1.94e+06 | 1393.41 | 971.55 | 0.8827   | 0.8798  | 0.8798      |

🔍 **Insights & Key Findings**

- **CatBoost Regressor** achieved the best performance with the highest R² scores.
- **XGBRegressor** and **Random Forest Regressor** showed competitive performance with slightly higher RMSE values.
- **Linear Regression**, **Ridge**, and **Lasso** performed the worst due to the complex non-linear relationships in the data.
- **Decision Tree** severely overfitted the training data, leading to poor generalization.
- **K-Neighbors Regressor** performed moderately but was not as effective as tree-based models.

🛠️ **How to Run the Project**

1. Clone the repository:

   ```bash
   git clone https://github.com/Mazenasag/Gemstone_Price_Prediction_.git
   cd diamond-price-prediction

   ```

2. Open your browser and go to http://127.0.0.1:5000/

3. Input diamond characteristics and get price predictions

👥 Contributor

[Mazen Asag]

📜 License

Feel free to contribute and improve the model! 🚀
