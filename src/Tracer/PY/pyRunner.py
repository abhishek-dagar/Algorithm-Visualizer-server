import sys
import json
code = sys.argv[1]
exec(code)
res = {
    'commands':tracer.commands,
}
print(json.dumps(res))