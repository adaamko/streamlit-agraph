

class Config:
  def __init__(self, height=750, width=750, **kwargs):
    self.height = f"{height}px"
    self.width = f"{width}px"
    self.__dict__.update(**kwargs)

  def to_dict(self):
    return self.__dict__

  
