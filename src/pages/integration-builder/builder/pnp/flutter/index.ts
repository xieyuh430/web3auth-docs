import * as hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.PNP_FLUTTER_MAIN_DART);
    filenames.push(hostedFileLinks.PNP_FLUTTER_BUILD_GRADLE);
    filenames.push(hostedFileLinks.PNP_FLUTTER_PODFILE);
    filenames.push(hostedFileLinks.PNP_FLUTTER_PUBSPEC_YAML);

    return { filenames, files, steps };
  },
};

export default framework;
