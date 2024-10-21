import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Command = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        command: column.text({ unique: true }),
        description: column.text({ optional: true }),
    },
    indexes: {
        commandIndex: { on: ['command'] },
    },
});

const Scenario = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        scenario: column.text(),
        description: column.text({ optional: true }),
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
