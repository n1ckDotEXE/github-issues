import React, { Component } from 'react'
import Issue from './Issue';

import './IssuesList.css';

class IssuesList extends Component {
  constructor() {
    super();

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(res => res.json())
      .then(data => {
        this.setState({
          issues: data ? data : []
        })
      })
  }

  render() {
    return (
      <div className="IssuesList">
        {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)}
      </div>
    )
  }

}

export default IssuesList;