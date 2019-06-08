import React from 'react';

import Range from './Range'

import './App.css';

export default class App extends React.Component  {

  state = {
      height: 180,
      weight: 80
  }

  bmi() {
      const {height, weight} = this.state;
      return weight / height / height * 10000;
  }

  category() {
      const bmi = this.bmi();
      if ( bmi < 18.5 )
          return 'Underweight'
      if ( bmi < 25 )
          return 'Normal'
      if ( bmi < 30 )
          return 'Overweight'
      else
          return 'Obese'
  }


  render () {
      const {height, weight} = this.state;
      const bmi = this.bmi().toFixed(1);
      const category = this.category();

      return (
        <React.Fragment>
            <header>
                <div className={'navbar navbar-dark bg-dark shadow-sm'}>
                    <div className={'container'}>
                        <h2 className={'navbar-brand'}>BMI calculator</h2>
                    </div>
                </div>
            </header>
            <main>
                <section className={'jumbotron text-center'}>
                    <h3>Please enter your height and weight</h3>
                    <div className="form-group">
                        <div>
                            <Range name={'height'}
                                   id={'height'}
                                   label={'Height: '}
                                   measure={'cm'}
                                   value={height}
                                   onChange={(event) => this.setState({height: event.target.value})}
                                   min = {90}
                                   max = {245}  />
                        </div>
                        <div>
                            <Range name={'weight'}
                                   id={'weight'}
                                   label={'Weight: '}
                                   measure={'kg'}
                                   value={weight}
                                   onChange={(event) => this.setState({weight: event.target.value})}
                                   min = {35}
                                   max = {200}  />
                        </div>
                    </div>
                    <div><span>BMI:</span> <span>{bmi}</span> <span>{category}</span></div>
                </section>
                <div>


                </div>
            </main>
        </React.Fragment>

    )
  }
}
