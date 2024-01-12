// app.js

angular.module('financeTrackerApp', [])
    .controller('FinanceController', function ($scope) {
        $scope.incomeTransactions = [];
        $scope.expenseTransactions = [];
        $scope.newIncome = {};
        $scope.newExpense = {};

        $scope.addIncome = function () {
            if ($scope.newIncome.description && !isNaN($scope.newIncome.amount)) {
                $scope.incomeTransactions.push({
                    description: $scope.newIncome.description,
                    amount: parseFloat($scope.newIncome.amount)
                });

                $scope.newIncome = {};
                $scope.updateSummary();
            }
        };

        $scope.addExpense = function () {
            if ($scope.newExpense.description && !isNaN($scope.newExpense.amount)) {
                $scope.expenseTransactions.push({
                    description: $scope.newExpense.description,
                    amount: parseFloat($scope.newExpense.amount)
                });

                $scope.newExpense = {};
                $scope.updateSummary();
            }
        };

        $scope.getTotalIncome = function () {
            return $scope.incomeTransactions.reduce((total, income) => total + income.amount, 0);
        };

        $scope.getTotalExpenses = function () {
            return $scope.expenseTransactions.reduce((total, expense) => total + expense.amount, 0);
        };

        $scope.getBalance = function () {
            return $scope.getTotalIncome() - $scope.getTotalExpenses();
        };

        $scope.updateSummary = function () {
            // Additional logic for updating summary, if needed
        };
    });
