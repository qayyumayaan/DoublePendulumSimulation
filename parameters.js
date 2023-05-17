    // Configuration object with parameter values
    var parameters = {
        theta1: {
          min: 0,
          max: 360,
          step: 1,
          defaultValue: 90,
        },
        theta2: {
          min: 0,
          max: 360,
          step: 1,
          defaultValue: 90,
        },
        omega1: {
          min: -10,
          max: 10,
          step: 0.1,
          defaultValue: 0,
        },
        omega2: {
          min: -10,
          max: 10,
          step: 0.1,
          defaultValue: 0,
        },
        length1: {
          min: 100,
          max: 300,
          step: 1,
          defaultValue: 200,
        },
        length2: {
          min: 100,
          max: 300,
          step: 1,
          defaultValue: 200,
        },
        mass1: {
          min: 10,
          max: 50,
          step: 1,
          defaultValue: 20,
        },
        mass2: {
          min: 10,
          max: 50,
          step: 1,
          defaultValue: 20,
        },
        speedSlider: {
          min: 10,
          max: 50,
          step: 1,
          defaultValue: 20,
        },
        timeStep: {
          min: 10,
          max: 50,
          step: 1,
          defaultValue: 20,
        },
      };

      // Function to set attributes of the input elements
      function setAttributes(element, attributes) {
        for (var key in attributes) {
          element.setAttribute(key, attributes[key]);
        }
      }

      // Set attributes for each input element based on the configuration object
      setAttributes(document.getElementById("theta1Slider"), {
        min: parameters.theta1.min,
        max: parameters.theta1.max,
        step: parameters.theta1.step,
        value: parameters.theta1.defaultValue,
      });

      setAttributes(document.getElementById("theta2Slider"), {
        min: parameters.theta2.min,
        max: parameters.theta2.max,
        step: parameters.theta2.step,
        value: parameters.theta2.defaultValue,
      });

      setAttributes(document.getElementById("omega1Slider"), {
        min: parameters.omega1.min,
        max: parameters.omega1.max,
        step: parameters.omega1.step,
        value: parameters.omega1.defaultValue,
      });

      setAttributes(document.getElementById("omega2Slider"), {
        min: parameters.omega2.min,
        max: parameters.omega2.max,
        step: parameters.omega2.step,
        value: parameters.omega2.defaultValue,
      });

      setAttributes(document.getElementById("length1Slider"), {
        min: parameters.length1.min,
        max: parameters.length1.max,
        step: parameters.length1.step,
        value: parameters.length1.defaultValue,
      });

      setAttributes(document.getElementById("length2Slider"), {
        min: parameters.length2.min,
        max: parameters.length2.max,
        step: parameters.length2.step,
        value: parameters.length2.defaultValue,
      });

      setAttributes(document.getElementById("mass1Slider"), {
        min: parameters.mass1.min,
        max: parameters.mass1.max,
        step: parameters.mass1.step,
        value: parameters.mass1.defaultValue,
      });

      setAttributes(document.getElementById("mass2Slider"), {
        min: parameters.mass2.min,
        max: parameters.mass2.max,
        step: parameters.mass2.step,
        value: parameters.mass2.defaultValue,
      });

      setAttributes(document.getElementById("speedSlider"), {
        min: parameters.mass2.min,
        max: parameters.mass2.max,
        step: parameters.mass2.step,
        value: parameters.mass2.defaultValue,
      });
