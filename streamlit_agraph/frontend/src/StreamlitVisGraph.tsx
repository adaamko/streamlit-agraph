import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import VisGraph from 'react-vis-graph-wrapper';


class StreamlitVisGraph extends StreamlitComponentBase {

  public render = (): ReactNode => {

    function lookup_node_id(lookup_node, mynodes){
      for (let node of mynodes){
          if (node.id === lookup_node){
              return node;
          }
    }}

    var graph = JSON.parse(this.props.args["data"]);
    
    var nodes = graph.nodes.slice();

    for (let i = 0; i < nodes.length; i++) {
      if(nodes[i].title)
        nodes[i].div = this.htmlTitle(nodes[i].title);
    }
  
    const options = JSON.parse(this.props.args["config"]);
    
    return (
      <span>
    
      <VisGraph
      graph={graph}
      options={options}
      getNetwork={(network: any) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
        //console.log(network);
      }}/>
      </span>
    )
  }

  private htmlTitle = (html):any => {   
    const container = document.createElement("div");
    container.innerHTML = html;
    return container;
  }
}

export default withStreamlitConnection(StreamlitVisGraph)