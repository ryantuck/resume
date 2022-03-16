import json
import yaml
import sys


def slurp_stdin():
    return ''.join(line for line in sys.stdin)


def main():
    yaml_data = slurp_stdin()
    data = yaml.safe_load(yaml_data)
    json_data = json.dumps(data)
    print(json_data)



if __name__ == '__main__':
    main()
