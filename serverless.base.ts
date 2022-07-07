import type { Serverless } from 'serverless/aws';

// Check 'awsProvider.d.ts' for all supported options.
export const baseServerlessConfiguration: Partial<Serverless> = {
  frameworkVersion: '3',
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: ['serverless-esbuild', 'serverless-offline'],
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      target: 'node16',
      packager: 'yarn',
      sourcemap: true,
      sourcesContent: false,
    },
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    memorySize: 128,
    architecture: 'arm64',
    apiGateway: {
      // enables compression for API Gateway responses
      minimumCompressionSize: 1024,
    },
    stage: "${opt:stage, 'dev'}",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    region: 'eu-west-1',
    stackTags: {
      project: '${self:service}',
    },
    tracing: {
      apiGateway: true,
      lambda: true,
    },
  },
};
