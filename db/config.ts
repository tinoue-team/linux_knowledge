import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Command = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        command: column.text({ unique: true }),
        description: column.text({ optional: true }),
        create_author: column.text(),
        update_author: column.text(),
        created_at: column.date({ default: new Date() }),
        updated_at: column.date({ default: new Date() }),
    },
    indexes: {
        commandIndex: { on: ['command'] },
    },
});

const Scenario = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        title: column.text(),
        description: column.text({ optional: true }),
        create_author: column.text(),
        update_author: column.text(),
        scenario: column.json(),
        created_at: column.date({ default: new Date() }),
        updated_at: column.date({ default: new Date() }),
    },
});

const CommandScenario = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        commandId: column.number({ references: () => Command.columns.id }),
        scenarioId: column.number({ references: () => Scenario.columns.id }),
    },
    indexes: {
        commandScenarioIndex: { on: ['commandId', 'scenarioId'] },
    },
});

// <https://astro.build/db/config>
export default defineDb({
    tables: { Command, Scenario, CommandScenario },
});
