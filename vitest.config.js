export default {
  // 测试文件所在目录
  testDir: 'tests',
  // 测试文件匹配规则
  testMatch: ['**/*.test.js'],
  // 测试覆盖率报告输出目录
  coverageDir: 'coverage',
  // 测试覆盖率报告格式
  coverageReporters: ['text', 'html'],
  // 测试环境配置
  env: {
    NODE_ENV: 'test',
  },
  // 测试框架配置
  framework: 'mocha',
  // 测试框架选项
  frameworkOptions: {
    timeout: 5000,
  },
  // 测试运行器配置
  runner: 'node',
  // 测试运行器选项
  runnerOptions: {
    nodeArgs: ['--experimental-vm-modules'],
  },
};