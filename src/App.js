import { apiRunDetail } from "./demo_data";
import { Graph } from "./graph";
import "./styles.css";
import * as JsYaml from "js-yaml";
import * as StaticGraphParser from "./StaticGraphParser";
import WorkflowParser from "./WorkflowParser";

export default function App() {
  const display_full_graph = true;
  let graph = undefined;

  if (display_full_graph) {
    // Displays the full graph without any state for each task
    const workflowManifest = apiRunDetail.pipeline_runtime.workflow_manifest;
    const templateString = workflowManifest;
    const template = JsYaml.load(templateString);
    graph = StaticGraphParser.createGraph(template);
  } else {
    // Displays the graph only for the items that are currently running
    const workflow = JSON.parse(
      apiRunDetail.pipeline_runtime.workflow_manifest
    );
    graph = WorkflowParser.createRuntimeGraph(workflow, undefined);
  }

  return (
    <>
      <Graph
        graph={graph}
        //selectedNodeId={selectedNodeId}
        //onClick={(id) => this._selectNode(id)}
        //onError={(message, additionalInfo) =>
        //  this.props.updateBanner({ message, additionalInfo, mode: "error" })
        //}
      />
    </>
  );
}
