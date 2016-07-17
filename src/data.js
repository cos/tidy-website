[
      {
        "id": "0",
        "description": "disallow assignment operators in conditional expressions",
        "file": "d3/src/selection/classed.js" ,
        "startLine": 14 ,
        "beforeCode": "      if (value = node.classList) {\n        while (++i < n) if (!value.contains(name[i])) return false;\n      } else {\n        value = node.getAttribute(\"class\");\n        while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;\n      }" ,
        "afterCode": "      value = node.classList;\n      if (value) {\n        while (++i < n)\n          if (!value.contains(name[i]))\n            return false;\n      } else {\n        value = node.getAttribute('class');\n        while (++i < n)\n          if (!d3_selection_classedRe(name[i]).test(value))\n            return false;\n      }"
      }   
,
      {
        "id": "1",
        "description": "disallow assignment operators in conditional expressions",
        "file": "d3/src/selection/data.js" ,
        "startLine": 39 ,
        "beforeCode": "          if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {\n            exitNodes[i] = node; // duplicate selection key\n          } else {\n            nodeByKeyValue.set(keyValue, node);\n          }" ,
        "afterCode": "          keyValue = key.call(node, node.__data__, i);\n          if (nodeByKeyValue.has(keyValue)) {\n            exitNodes[i] = node;\n          } else {\n            nodeByKeyValue.set(keyValue, node);\n          }"
      }   
,
      {
        "id": "2",
        "description": "disallow assignment operators in conditional expressions",
        "file": "d3/src/selection/enter-select.js" ,
        "startLine": 16 ,
        "beforeCode": "      if (node = group[i]) {\n        subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));\n        subnode.__data__ = node.__data__;\n      } else {\n        subgroup.push(null);\n      }" ,
        "afterCode": "      node = group[i];\n      if (node) {\n        subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));\n        subnode.__data__ = node.__data__;\n      } else {\n        subgroup.push(null);\n      }"
      }  
,
      {
        "id": "3",
        "description": "disallow assignment operators in conditional expressions",
        "file": "d3/src/selection/select.js" ,
        "startLine": 15 ,
        "beforeCode": "      if (node = group[i]) {\n        subgroup.push(subnode = selector.call(node, node.__data__, i, j));\n        if (subnode && \"__data__\" in node) subnode.__data__ = node.__data__;\n      } else {\n        subgroup.push(null);\n      }" ,
        "afterCode": "      node = group[i];\n      if (node) {\n        subgroup.push(subnode = selector.call(node, node.__data__, i, j));\n        if (subnode && '__data__' in node)\n          subnode.__data__ = node.__data__;\n      } else {\n        subgroup.push(null);\n      }"
      }
]