import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Command = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        command: column.text({ unique: true }),
        description: column.text({ optional: true }),
        // usage: column.text(),
        // aliases: column.text({ array: true }),
    },
    indexes: {
        commandIndex: { on: ['command'] },
    },
    // foreignKeys: [
    //     {
    //         columns: ['id'],
    //         references: () => CommandScenario.columns.commandId,
    //     },
    // ],
});

const Scenario = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        scenario: column.text(),
        description: column.text({ optional: true }),
        // commands: column.text({ array: true }),
    },
    // foreignKeys: [
    //     {
    //         columns: ['id'],
    //         references: () => CommandScenario.columns.scenarioId,
    //     },
    // ],
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

export default defineDb({
    tables: { Command, Scenario, CommandScenario },
});
