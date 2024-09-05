# Object Orientation

## Encapsulation

```java
// A Simple Class Example
public class Point {
	private int x;
	private int y;
	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}
	public Point relativeTo(int dx, int dy) {
		reutnr new Point(x+dx, y+dy);
	}
}

// To represent a point, simply create an instance of the Point class.
Point p = new Point(5,10);
```

The way that this class encompasses the details of how the point works is the idea of encapsulation (the hiding of implementation details).

## Inheritance and Polymorphism

- These two are closely related...
  - Inheritance allows a class to be defined as a modified or more specialized version of another class.
    - When class B inherits from class A, class A is B's parent or base class, and B is A's subclass.
    - All behaviors defined by class A are also part of class B, though possibly in a modified form. Class B can be used in any place class A is used.
  - Polymorphism is the capability to provide multiple implementations of an action and to select the correct implementation based on the surrounding context.
    - A class might define two versions of a method with different parameters. Or the same method might be defined both in a parent class and a subclass, the latter overriding the former for instances of the subclass.
    - The method selected can occur during compilation of run time.

### Example

Define at top of hierarchy shape class that defines the things that all shapes have in common:

```java
public abstract class Shape {
	protected Point center;
	protected Shape(Point center) {
		this.center = center;
	}
	public Point getCenter() {
		return center;
	}
}
```

Specialize the shapes into Rectangle subclass:

```java
public class Rectangle extends Shape {
	private int h;
	private int w;

	public Rectangle(Point center, int w, int h) {
		super(center);
		this.w = w;
		this.h = h;
	}
}
```

## Interfaces and Abstract Classes

---

**PROBLEM** _What is the difference between an interface and an abstract class in object-oriented programming?_

- An interface declares a set of related methods, outside of any class. (An API)
- An abstract class is an incomplete class definition that declares but does not defines all its methods.

---

Abstract class

- Unlike an interface, an abstract class is a proper class: It can have data members and method definitions and can be a subclass of other classes. Unlike a concrete class, some of its behaviors are deliberately left to be defined by its own sub-classes. Abstract classes thus cannot be instantiated--only instances of concrete sub-classes can be created.

```java
// An interface
public interface StatusCallBack {
	void updateStatus(int oState, int nState);
}

// An implementation on the interface
public class MyClass implements StatusCallBack {
	public void updateStatus(int oState, int nState) {
		if (nState > oState) {
			...
		}
	}
}
```

### Common Pattern

When a language supports both interfaces and abstract classes often you can see the provision of a default implementation of an interface via an abstract class.

#### Example

```java
// 1. Create Interface
public interface XMLReader {
	public XMLObject fromString(String str);
	public XMLObject fromReader(Reader in);
}

// 2. Create default implementation with a class
public class XMLReaderImpl implememnts XMLReader {
	public XMLObject fromString(String str) {
		return fromReader(new StringReader(str));
	}
	public abstract XMLObject fromReader(Reader in);
}
```

Now a future developer could inherit from `XMLReaderImp` and only have to implement the `fromReader()` function instead of two.

- Abstract classes are generally useful when classes are derived from more specific types of a base class. (_is-a_ relationship).

## Virtual Methods

---

**PROBLEM** _What are virtual methods? Why are they useful?_

- Virtual methods are functions in a base class that can be overridden in derived classes to provide specific implementations, allowing for dynamic polymorphism and enabling more flexible and reusable code.

---

In java methods are always virtual unless declared static. In C# or C++, methods are only virtual when declared as such. If the method is not virtual, then the method definition invoked is determined at compile time based on the type of the reference (or pointer).

### Example

```java
// Create base class
public class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// Create a dog based on the animal class.
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

// Create a cat based on the animal class.
public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

// When you call each type you will get differnt results
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Outputs: Bark
        myCat.makeSound(); // Outputs: Meow
    }
}
```

If you declare the `makeSound` method as `static` in the parent class, the behavior would be different. Static methods belong to the class itself, not to instances of the class, so they cannot be overridden in the same way as instance methods.
