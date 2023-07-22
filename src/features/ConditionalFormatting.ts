import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class ConditionalFormatting implements BaseFeature {
    public static featureName = "Conditional Formatting"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/conditional-format"
    public static severity = Severity.Info
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.Default
    public static errorMessage = `${this.featureName} - ${this.documentationLink}`

    static isSupported(packageInstance: Package) {
        return packageInstance.contain(".createDataViewWildcardSelector")
    }
} 