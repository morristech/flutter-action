import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    const version = core.getInput('flutter-version') || '';
    const channel = core.getInput('channel') || 'stable';

    await installer.getFlutter(version, channel);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
