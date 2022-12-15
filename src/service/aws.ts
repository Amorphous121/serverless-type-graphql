import * as Aws from 'aws-sdk';

Aws.config.update({});

export class DynamoDb {
    private static instance: Aws.DynamoDB;

    private constructor () {}

    public static getInstance () {
        if (!DynamoDb.instance) {
            DynamoDb.instance = new Aws.DynamoDB();
        }

        return DynamoDb.instance;
    }
}