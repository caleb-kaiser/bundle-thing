export const ExecutionHelpers = {
  getWorkspace(execution: any): string | number | undefined {
    return (
      //getResourcePropertyViaFallBack(execution, EXECUTION_PROPERTY_REPOS, ['RUN_ID']) ||
      //getStringProperty(execution, ExecutionCustomProperties.WORKSPACE, true) ||
      //getStringProperty(execution, ExecutionProperties.PIPELINE_NAME) ||
      undefined
    );
  },
  getName(execution: any): string {
    return "(No name)";
    // return `${getStringProperty(execution, KfpExecutionProperties.DISPLAY_NAME, true) ||
    //   getStringProperty(execution, KfpExecutionProperties.TASK_NAME, true) ||
    //   getStringProperty(execution, ExecutionProperties.NAME) ||
    //   getStringProperty(execution, ExecutionProperties.COMPONENT_ID) ||
    //   getStringProperty(execution, ExecutionCustomProperties.TASK_ID, true) ||
    //   // TFX 1.2.0 executions do not have any of the above, adding pod name as a fallback name
    //   getStringProperty(execution, KfpExecutionProperties.KFP_POD_NAME, true) ||
    //   '(No name)'}`;
  },
  getState(execution: any): string | number | undefined {
    return undefined;
    //return getStringProperty(execution, ExecutionProperties.STATE) || undefined;
  },
  getKfpPod(execution: any): string | undefined {
    return undefined;
    // return (
    //   getStringProperty(execution, KfpExecutionProperties.POD_NAME, true) ||
    //   getStringProperty(execution, KfpExecutionProperties.KFP_POD_NAME) ||
    //   getStringProperty(execution, KfpExecutionProperties.KFP_POD_NAME, true) ||
    //   undefined
    // );
  }
};
