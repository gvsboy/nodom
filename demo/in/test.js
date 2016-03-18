/*
Crazy thought: What if, instead of wrapping every DOM object instance with a gate, I just identify whether or not the given file references DOM objects and then wrap the entire thing with one gate?
 */

var obj = {};

obj.ua = window.navigator.userAgent.toLowerCase();

if (window.location.hostname.includes('cool')) {
  obj.cool = true;
}

if (obj.ua.includes('mozilla') && obj.cool) {
  window.addEventListener('message', function(evt) {
    console.log('The pizza data is', evt.data);
  });
}

window.location = 'http://kevinmikles.com';

const life = 37;

/*
{
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 17,
            "column": 16
        }
    },
    "type": "Program",
    "body": [
        {
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 13
                }
            },
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 12
                        }
                    },
                    "type": "VariableDeclarator",
                    "id": {
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 7
                            }
                        },
                        "type": "Identifier",
                        "name": "obj"
                    },
                    "init": {
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 10
                            },
                            "end": {
                                "line": 1,
                                "column": 12
                            }
                        },
                        "type": "ObjectExpression",
                        "properties": []
                    }
                }
            ],
            "kind": "var"
        },
        {
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 50
                }
            },
            "type": "ExpressionStatement",
            "expression": {
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 0
                    },
                    "end": {
                        "line": 3,
                        "column": 49
                    }
                },
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 0
                        },
                        "end": {
                            "line": 3,
                            "column": 6
                        }
                    },
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 0
                            },
                            "end": {
                                "line": 3,
                                "column": 3
                            }
                        },
                        "type": "Identifier",
                        "name": "obj"
                    },
                    "property": {
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 6
                            }
                        },
                        "type": "Identifier",
                        "name": "ua"
                    }
                },
                "right": {
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 9
                        },
                        "end": {
                            "line": 3,
                            "column": 49
                        }
                    },
                    "type": "CallExpression",
                    "callee": {
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 9
                            },
                            "end": {
                                "line": 3,
                                "column": 47
                            }
                        },
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 9
                                },
                                "end": {
                                    "line": 3,
                                    "column": 35
                                }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 25
                                    }
                                },
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 15
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "window"
                                },
                                "property": {
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 16
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 25
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "navigator"
                                }
                            },
                            "property": {
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 26
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 35
                                    }
                                },
                                "type": "Identifier",
                                "name": "userAgent"
                            }
                        },
                        "property": {
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 36
                                },
                                "end": {
                                    "line": 3,
                                    "column": 47
                                }
                            },
                            "type": "Identifier",
                            "name": "toLowerCase"
                        }
                    },
                    "arguments": []
                }
            }
        },
        {
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 7,
                    "column": 1
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 4
                    },
                    "end": {
                        "line": 5,
                        "column": 45
                    }
                },
                "type": "CallExpression",
                "callee": {
                    "loc": {
                        "start": {
                            "line": 5,
                            "column": 4
                        },
                        "end": {
                            "line": 5,
                            "column": 37
                        }
                    },
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 4
                            },
                            "end": {
                                "line": 5,
                                "column": 28
                            }
                        },
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 4
                                },
                                "end": {
                                    "line": 5,
                                    "column": 19
                                }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 5,
                                        "column": 10
                                    }
                                },
                                "type": "Identifier",
                                "name": "window"
                            },
                            "property": {
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 11
                                    },
                                    "end": {
                                        "line": 5,
                                        "column": 19
                                    }
                                },
                                "type": "Identifier",
                                "name": "location"
                            }
                        },
                        "property": {
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 20
                                },
                                "end": {
                                    "line": 5,
                                    "column": 28
                                }
                            },
                            "type": "Identifier",
                            "name": "hostname"
                        }
                    },
                    "property": {
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 29
                            },
                            "end": {
                                "line": 5,
                                "column": 37
                            }
                        },
                        "type": "Identifier",
                        "name": "includes"
                    }
                },
                "arguments": [
                    {
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 38
                            },
                            "end": {
                                "line": 5,
                                "column": 44
                            }
                        },
                        "type": "Literal",
                        "value": "cool",
                        "raw": "'cool'"
                    }
                ]
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 47
                    },
                    "end": {
                        "line": 7,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 6,
                                "column": 2
                            },
                            "end": {
                                "line": 6,
                                "column": 18
                            }
                        },
                        "type": "ExpressionStatement",
                        "expression": {
                            "loc": {
                                "start": {
                                    "line": 6,
                                    "column": 2
                                },
                                "end": {
                                    "line": 6,
                                    "column": 17
                                }
                            },
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 2
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 10
                                    }
                                },
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 5
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "obj"
                                },
                                "property": {
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 10
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "cool"
                                }
                            },
                            "right": {
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 13
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 17
                                    }
                                },
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                            }
                        }
                    }
                ]
            },
            "alternate": null
        },
        {
            "loc": {
                "start": {
                    "line": 9,
                    "column": 0
                },
                "end": {
                    "line": 13,
                    "column": 1
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 9,
                        "column": 4
                    },
                    "end": {
                        "line": 9,
                        "column": 42
                    }
                },
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                    "loc": {
                        "start": {
                            "line": 9,
                            "column": 4
                        },
                        "end": {
                            "line": 9,
                            "column": 30
                        }
                    },
                    "type": "CallExpression",
                    "callee": {
                        "loc": {
                            "start": {
                                "line": 9,
                                "column": 4
                            },
                            "end": {
                                "line": 9,
                                "column": 19
                            }
                        },
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "loc": {
                                "start": {
                                    "line": 9,
                                    "column": 4
                                },
                                "end": {
                                    "line": 9,
                                    "column": 10
                                }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "loc": {
                                    "start": {
                                        "line": 9,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 9,
                                        "column": 7
                                    }
                                },
                                "type": "Identifier",
                                "name": "obj"
                            },
                            "property": {
                                "loc": {
                                    "start": {
                                        "line": 9,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 9,
                                        "column": 10
                                    }
                                },
                                "type": "Identifier",
                                "name": "ua"
                            }
                        },
                        "property": {
                            "loc": {
                                "start": {
                                    "line": 9,
                                    "column": 11
                                },
                                "end": {
                                    "line": 9,
                                    "column": 19
                                }
                            },
                            "type": "Identifier",
                            "name": "includes"
                        }
                    },
                    "arguments": [
                        {
                            "loc": {
                                "start": {
                                    "line": 9,
                                    "column": 20
                                },
                                "end": {
                                    "line": 9,
                                    "column": 29
                                }
                            },
                            "type": "Literal",
                            "value": "mozilla",
                            "raw": "'mozilla'"
                        }
                    ]
                },
                "right": {
                    "loc": {
                        "start": {
                            "line": 9,
                            "column": 34
                        },
                        "end": {
                            "line": 9,
                            "column": 42
                        }
                    },
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "loc": {
                            "start": {
                                "line": 9,
                                "column": 34
                            },
                            "end": {
                                "line": 9,
                                "column": 37
                            }
                        },
                        "type": "Identifier",
                        "name": "obj"
                    },
                    "property": {
                        "loc": {
                            "start": {
                                "line": 9,
                                "column": 38
                            },
                            "end": {
                                "line": 9,
                                "column": 42
                            }
                        },
                        "type": "Identifier",
                        "name": "cool"
                    }
                }
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 9,
                        "column": 44
                    },
                    "end": {
                        "line": 13,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 10,
                                "column": 2
                            },
                            "end": {
                                "line": 12,
                                "column": 5
                            }
                        },
                        "type": "ExpressionStatement",
                        "expression": {
                            "loc": {
                                "start": {
                                    "line": 10,
                                    "column": 2
                                },
                                "end": {
                                    "line": 12,
                                    "column": 4
                                }
                            },
                            "type": "CallExpression",
                            "callee": {
                                "loc": {
                                    "start": {
                                        "line": 10,
                                        "column": 2
                                    },
                                    "end": {
                                        "line": 10,
                                        "column": 25
                                    }
                                },
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "loc": {
                                        "start": {
                                            "line": 10,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 10,
                                            "column": 8
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "window"
                                },
                                "property": {
                                    "loc": {
                                        "start": {
                                            "line": 10,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 10,
                                            "column": 25
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "addEventListener"
                                }
                            },
                            "arguments": [
                                {
                                    "loc": {
                                        "start": {
                                            "line": 10,
                                            "column": 26
                                        },
                                        "end": {
                                            "line": 10,
                                            "column": 35
                                        }
                                    },
                                    "type": "Literal",
                                    "value": "message",
                                    "raw": "'message'"
                                },
                                {
                                    "loc": {
                                        "start": {
                                            "line": 10,
                                            "column": 37
                                        },
                                        "end": {
                                            "line": 12,
                                            "column": 3
                                        }
                                    },
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [
                                        {
                                            "loc": {
                                                "start": {
                                                    "line": 10,
                                                    "column": 46
                                                },
                                                "end": {
                                                    "line": 10,
                                                    "column": 49
                                                }
                                            },
                                            "type": "Identifier",
                                            "name": "evt"
                                        }
                                    ],
                                    "defaults": [],
                                    "body": {
                                        "loc": {
                                            "start": {
                                                "line": 10,
                                                "column": 51
                                            },
                                            "end": {
                                                "line": 12,
                                                "column": 3
                                            }
                                        },
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "loc": {
                                                    "start": {
                                                        "line": 11,
                                                        "column": 4
                                                    },
                                                    "end": {
                                                        "line": 11,
                                                        "column": 47
                                                    }
                                                },
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "loc": {
                                                        "start": {
                                                            "line": 11,
                                                            "column": 4
                                                        },
                                                        "end": {
                                                            "line": 11,
                                                            "column": 46
                                                        }
                                                    },
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "loc": {
                                                            "start": {
                                                                "line": 11,
                                                                "column": 4
                                                            },
                                                            "end": {
                                                                "line": 11,
                                                                "column": 15
                                                            }
                                                        },
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "loc": {
                                                                "start": {
                                                                    "line": 11,
                                                                    "column": 4
                                                                },
                                                                "end": {
                                                                    "line": 11,
                                                                    "column": 11
                                                                }
                                                            },
                                                            "type": "Identifier",
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "loc": {
                                                                "start": {
                                                                    "line": 11,
                                                                    "column": 12
                                                                },
                                                                "end": {
                                                                    "line": 11,
                                                                    "column": 15
                                                                }
                                                            },
                                                            "type": "Identifier",
                                                            "name": "log"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "loc": {
                                                                "start": {
                                                                    "line": 11,
                                                                    "column": 16
                                                                },
                                                                "end": {
                                                                    "line": 11,
                                                                    "column": 35
                                                                }
                                                            },
                                                            "type": "Literal",
                                                            "value": "The pizza data is",
                                                            "raw": "'The pizza data is'"
                                                        },
                                                        {
                                                            "loc": {
                                                                "start": {
                                                                    "line": 11,
                                                                    "column": 37
                                                                },
                                                                "end": {
                                                                    "line": 11,
                                                                    "column": 45
                                                                }
                                                            },
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 11,
                                                                        "column": 37
                                                                    },
                                                                    "end": {
                                                                        "line": 11,
                                                                        "column": 40
                                                                    }
                                                                },
                                                                "type": "Identifier",
                                                                "name": "evt"
                                                            },
                                                            "property": {
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 11,
                                                                        "column": 41
                                                                    },
                                                                    "end": {
                                                                        "line": 11,
                                                                        "column": 45
                                                                    }
                                                                },
                                                                "type": "Identifier",
                                                                "name": "data"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "generator": false,
                                    "expression": false
                                }
                            ]
                        }
                    }
                ]
            },
            "alternate": null
        },
        {
            "loc": {
                "start": {
                    "line": 15,
                    "column": 0
                },
                "end": {
                    "line": 15,
                    "column": 43
                }
            },
            "type": "ExpressionStatement",
            "expression": {
                "loc": {
                    "start": {
                        "line": 15,
                        "column": 0
                    },
                    "end": {
                        "line": 15,
                        "column": 42
                    }
                },
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "loc": {
                        "start": {
                            "line": 15,
                            "column": 0
                        },
                        "end": {
                            "line": 15,
                            "column": 15
                        }
                    },
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "loc": {
                            "start": {
                                "line": 15,
                                "column": 0
                            },
                            "end": {
                                "line": 15,
                                "column": 6
                            }
                        },
                        "type": "Identifier",
                        "name": "window"
                    },
                    "property": {
                        "loc": {
                            "start": {
                                "line": 15,
                                "column": 7
                            },
                            "end": {
                                "line": 15,
                                "column": 15
                            }
                        },
                        "type": "Identifier",
                        "name": "location"
                    }
                },
                "right": {
                    "loc": {
                        "start": {
                            "line": 15,
                            "column": 18
                        },
                        "end": {
                            "line": 15,
                            "column": 42
                        }
                    },
                    "type": "Literal",
                    "value": "http://kevinmikles.com",
                    "raw": "'http://kevinmikles.com'"
                }
            }
        },
        {
            "loc": {
                "start": {
                    "line": 17,
                    "column": 0
                },
                "end": {
                    "line": 17,
                    "column": 16
                }
            },
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "loc": {
                        "start": {
                            "line": 17,
                            "column": 6
                        },
                        "end": {
                            "line": 17,
                            "column": 15
                        }
                    },
                    "type": "VariableDeclarator",
                    "id": {
                        "loc": {
                            "start": {
                                "line": 17,
                                "column": 6
                            },
                            "end": {
                                "line": 17,
                                "column": 10
                            }
                        },
                        "type": "Identifier",
                        "name": "life"
                    },
                    "init": {
                        "loc": {
                            "start": {
                                "line": 17,
                                "column": 13
                            },
                            "end": {
                                "line": 17,
                                "column": 15
                            }
                        },
                        "type": "Literal",
                        "value": 37,
                        "raw": "37"
                    }
                }
            ],
            "kind": "const"
        }
    ],
    "sourceType": "script"
}
 */