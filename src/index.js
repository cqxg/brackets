module.exports = function check(str, bracketsConfig) {
  var bracketsConfigLen = bracketsConfig.length;
  var left_parts = [];
  var right_parts = [];
  var stack = [];

  for (var i = 0; i < bracketsConfigLen; i++) {
      left_parts.push(bracketsConfig[i][0]);
      right_parts.push(bracketsConfig[i][1]);
  }

  for (var i = 0; i < str.length; i++) {
      var current_Elm = str[i];
      var lefts_index = left_parts.indexOf(current_Elm);
      var rights_index = right_parts.indexOf(current_Elm);

      if (lefts_index === rights_index) {
          if (stack.includes(current_Elm)) {
              stack.pop();
          } else stack.push(current_Elm);
      } else if (lefts_index !== -1) {
          stack.push(current_Elm);
      } else if (rights_index !== -1
                  && stack.length > 0
                  && left_parts[rights_index] === stack[stack.length-1]){
                      stack.pop();
      } else return false;

  }
  return stack.length == 0 ? true : false;
}
