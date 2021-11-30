import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Cluster, ExecuteCommandLogging } from 'aws-cdk-lib/aws-ecs';
import { LogGroup } from "aws-cdk-lib/aws-logs";
import { Construct } from 'constructs';

export class CdkEcsBugStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Cluster(this, 'Cluster', {
      containerInsights: true,
      // Deploy once then uncomment the below code and deploy again
      // executeCommandConfiguration: {
      //   logging: ExecuteCommandLogging.OVERRIDE,
      //   logConfiguration: {
      //     cloudWatchLogGroup: new LogGroup(this, 'LogGroup'),
      //   }
      // },
    });
  }
}

const app = new App();
new CdkEcsBugStack(app, 'cdk-ecs-bug', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
