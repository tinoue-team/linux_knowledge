import { Command, Scenario, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Command).values([
        {
            command: 'ls',
            description: 'List directory contents',
            create_author: 'TinoueT',
            update_author: 'TinoueT',
        },
        {
            command: 'chmod',
            description: 'Change file or directory permission',
            create_author: 'TinoueT',
            update_author: 'TinoueT',
        },
    ]);
    await db.insert(Scenario).values([
        {
            title: 'list-files',
            description: 'List files in the current directory',
            create_author: 'TinoueT',
            update_author: 'TinoueT',
            scenario: JSON.stringify({ action: 'listing files' }),
        },
        {
            title: 'try permission change',
            scenario: JSON.stringify({ action: 'change permission' }),
            description: 'change permission file and directory',
            create_author: 'TinoueT',
            update_author: 'TinoueT',
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]);
    // CommandScenario の挿入
    // await db.insert(CommandScenario).values({
    //     commandId: command.id,
    //     scenarioId: scenario.id,
    // });
}
