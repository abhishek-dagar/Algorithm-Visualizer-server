import sys
import json
from AlgorithmVisualizer import Tracer
code = sys.argv[1]
exec(code)
res = {
    'commands':Tracer.commands,
}
print(json.dumps(res))