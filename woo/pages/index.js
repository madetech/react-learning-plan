import React from 'react'
import Link from 'next/link'


export default class Woo extends React.Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.scheduleATimeUpdate();
  }

  scheduleATimeUpdate() {
    setTimeout(() => {
      this.setState({
        time: new Date()
      });
      this.scheduleATimeUpdate();
    }, 500);
  }

  Ws () {
    return 'w'.repeat(this.state.time.getMinutes());
  }

  Ooos () {
    return 'o'.repeat(this.state.time.getSeconds())
  }

  render () {
    return <Link href="thank-you"><span>{this.Ws()}{this.Ooos()}</span></Link>
  }
}
