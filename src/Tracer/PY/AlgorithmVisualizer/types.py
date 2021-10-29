from typing import Union

# Types which are serializable by the default JSONEncoder
Serializable = Union[dict, list, tuple, str, int, float, bool, None]
Number = Union[int, float]


class Undefined:
    pass


UNDEFINED = Undefined()
