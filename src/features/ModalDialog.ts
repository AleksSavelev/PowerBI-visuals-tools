import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class ModalDialog implements BaseFeature {
    public static featureName = "Modal Dialog"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/create-display-dialog-box"
    public static severity = Severity.Info
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.Default 

    static isSupported(packageInstance: Package) {
        return packageInstance.contain(".openModalDialog")
    }
} 