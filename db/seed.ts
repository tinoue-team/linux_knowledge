import { Command, Scenario, db } from 'astro:db';
// import { Command, Scenario } from './config';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Command).values([
        { command: 'ls', description: 'List directory contents' },
        { command: 'chmod', description: 'Change file or directory permission' },
    ]);
    await db.insert(Scenario).values([
        {
            scenario: 'list-files',
            description: 'List files in the current directory',
        },
    ]);
    // CommandScenario の挿入
    // await db.insert(CommandScenario).values({
    //     commandId: command.id,
    //     scenarioId: scenario.id,
    // });
}
