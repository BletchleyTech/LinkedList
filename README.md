# **Linked List**

Linked List provides a native implementation of a linked list data structure in JavaScript.

## **Installation**

Using npm:

```shell
$ npm install @bletchley-tech/linkedlist
```

## **Usage**

Linked List provides a native implementation of a linked list data structure in JavaScript designed for use in a Node.js environment. All operations are performed synchronously.

The package provides a single class, LinkedList, which is used to create and manage a singly linked list, like shown below:

1) Import/Require the package:

	```javascript
	// CommonJS
	const LinkedList = require('@bletchley-tech/linkedlist');

	//ES6+
	import LinkedList from '@bletchley-tech/linkedlist';
	```

	This will import the LinkedList class from the package and allow you to create new instances of the class.

2) Create a new instance of the LinkedList class:

	```javascript
	const list = new LinkedList();
	```

	This will create a new instance of the LinkedList class and store it in the list variable.

3) Use the list:

	```javascript
	list.add('a'); // Create a node with value 'a' and add it to the end of the list
	list.addMany(['b', 'c', 'd']); // Create nodes for each element in the array and add each to the end of the list.
	list.list; // "a -> b -> c -> d"
	```

## **LinkedList Class**

The LinkedList has two properties, head and length. Head is the first node in the list and length is the number of nodes in the list.

The LinkedList class takes advantage of the new private class properties/methods JavaScript feature introduced in ES2022. This means that once the LinkedList is initialized, it will not be able to be changed except by the class' own methods.

### **Class Methods**

#### *add(value)*

The add method adds a node with data 'value' to the end of the list.

```javascript
list.add(value); // Add a node with data 'value' to the end of the list
```

#### *addMany(values)*

The addMany method adds nodes with data from 'values' to the end of the list. The values to be added can be passed as an array or separated by commas like multiple arguments.

```javascript
list.addMany(1, 2, 3); // Add nodes with data 1, 2, 3 to the end of the list

// or

list.addMany([1, 2, 3]); // Add nodes with data 1, 2, 3 to the end of the list
```

#### *remove(position)*

The remove method will remove and return the node at the specified position from the list. The first node is at position 1.

```javascript
const removed = list.remove(1); // Remove and return the node at position 1 (head) from the list
```

#### *nodeAt(position)*

The nodeAt method will return the node at the specified position from the list. The first node is at position 1.

```javascript
const node = list.nodeAt(1); // Return the node at position 1 (head) from the list
```

#### *valueAt(position)*

The valueAt method will return the value of the node at the specified position from the list. The first node is at position 1.

```javascript
const value = list.valueAt(1); // Return the value of the node at position 1 (head) from the list
```

### **Class Attributes**

#### *head*

```javascript
list.head; // Return the first node in the list
```

This will return the node at the head of the list.

#### *length*

```javascript
list.length; // Return the number of nodes in the list
```

This will return the number of nodes in the list.

#### *list*

```javascript
list.list; // Return the list as a string of each nodes' data separated by a ->
```

## **License**

LinkedList is licensed under the MIT License (see the [LICENSE](LICENSE) file for mor information).