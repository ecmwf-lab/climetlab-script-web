import climetlab as cml
import climetlab_demo_dataset


def test_dataset():
    cml.register_dataset(climetlab_demo_dataset)
    cml.load_dataset("climetlab-demo-dataset")


if __name__ == "__main__":
    test_dataset()
