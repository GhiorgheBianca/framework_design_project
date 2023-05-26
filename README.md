# Angular Web Component - Bar Chart

This project encapsulates a Bar Chart Web Component and a Line Chart Web Component. The component uses the Chart.js library. It ilustrates two charts of types bar and line. Both have the categories "Fruits" and "Vegetables" to show the sell numbers of the specified categories in a time period.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Utilization

Each component has CSS, HTML and TypeScript files. These are located in the `src/app/bar-chart` and `src/app/line-chart` folders. To edit the data and labels, the TypeScript files `bar-chart.component.ts` and `line-chart.component.ts` need to be updated. More exactly, method `createChart()`.

```
this.chart = new Chart("MyChart", {
      // the type of chart
      type: 'bar',

      data: {
        // values on X-Axis
        labels: [
            '2023-05-10',
            '2023-05-11',
            '2023-05-12',
            '2023-05-13',
		    '2023-05-14',
            '2023-05-15',
            '2023-05-16',
            '2023-05-17'], 
	       datasets: [
          {
            label: "Fruits",
            data: ['492', '374', '673', '376',
                   '381', '451', '655', '276'],
            backgroundColor: 'purple'
          },
          {
            label: "Vegetables",
            data: ['317', '512', '438', '241',
                   '420', '280', '658', '452'],
            backgroundColor: 'orange'
          }  
        ]
      },
      options: {
        aspectRatio:3.5
      }
      
    });
```

To add the components in the page, use the tags `<app-bar-chart></app-bar-chart>` and `<app-line-chart></app-line-chart>`.

## Code explanation

The implementation uses mainly the library Chart.js. The object Chart is used to add the Chart Web Component. It is specified the type of the chart (e.g. bar, line, pie), the labels of axis X and axis Y, respectively data that will be displayed on the chart.

## Used commands

The command `ng new angular-web-component` was used to create the base project.

The command `npm install chart.js` was used to install the Chart.js library.

The command `ng generate component bar-chart` and `ng generate component line-chart` were used to generate the new components for the bar and line charts.
