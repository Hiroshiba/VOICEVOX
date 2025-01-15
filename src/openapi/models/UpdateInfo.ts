/* tslint:disable */
/* eslint-disable */
/**
 * DUMMY Engine
 * DUMMY の音声合成エンジンです。
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * エンジンのアップデート情報
 * @export
 * @interface UpdateInfo
 */
export interface UpdateInfo {
    /**
     * エンジンのバージョン名
     * @type {string}
     * @memberof UpdateInfo
     */
    version: string;
    /**
     * アップデートの詳細についての説明
     * @type {Array<string>}
     * @memberof UpdateInfo
     */
    descriptions: Array<string>;
    /**
     * 貢献者名
     * @type {Array<string>}
     * @memberof UpdateInfo
     */
    contributors?: Array<string>;
}

/**
 * Check if a given object implements the UpdateInfo interface.
 */
export function instanceOfUpdateInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "descriptions" in value;

    return isInstance;
}

export function UpdateInfoFromJSON(json: any): UpdateInfo {
    return UpdateInfoFromJSONTyped(json, false);
}

export function UpdateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'descriptions': json['descriptions'],
        'contributors': !exists(json, 'contributors') ? undefined : json['contributors'],
    };
}

export function UpdateInfoToJSON(value?: UpdateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'descriptions': value.descriptions,
        'contributors': value.contributors,
    };
}

