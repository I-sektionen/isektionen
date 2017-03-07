/**
 * Created by henrikfredriksson on 2016-11-22.
 */

function createCompanyChart () {

    var companyCtx = $("#chart-company");

    var companyChartLabels = [
            "Scania",
            "BCG",
            "SAAB",
            "Volvo",
            "Google"
        ];

    var companyChartDataSet = [80, 30, 60, 15, 120];

    var companyChartBackgroundColor = '#2D701E';
    var companyChartBackgroundColorSet = generateChartColorSet(
        companyChartBackgroundColor,
        companyChartDataSet.length,
        0.15
    );

    var companyChartDataSet = [
        {
            data: companyChartDataSet,
            backgroundColor: companyChartBackgroundColorSet,
            hoverBackgroundColor: shadeBlendConvert(-0.1, companyChartBackgroundColor) // shadeBlendConvert is defined in program-charts.js
        }];

    var companyChartData = {
        labels: companyChartLabels,
        datasets: companyChartDataSet
    };

    var companyChart = new Chart(companyCtx, {
        type: 'doughnut',
        data: companyChartData,
    })

}
