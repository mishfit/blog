---
title: "Brevity is an Acceptable Policy"
date: 2015-09-12 00:24:00
categories: [csharp,dnx]
---
Okay when it comes to code, "comprehension is king". Readability trumps cleverness (I feel like my usage of the word "trump" has increased over the last few months, I wonder why). I am sometimes bitten by the cleverness bug and it seems C# 6 will let me cater to those times. The penultimate "hello world" example allows us to showcase this:

```csharp
using static System.Console;
public class Program
{
  public void Main(string[] args) => WriteLine("Hello World");
}
```

This slightly shortened overused example has two features of C# 6 on display: [static usings](https://msdn.microsoft.com/en-us/magazine/dn879355.aspx) and expression-bodied methods. I chose both of these features to discuss because they really do simplify your life (and are less controversial than the null propogation operator, for instance).

Great! You say, sarcastically. "But the overhead involved in simply coding, compiling and executing this snippet isn't mitigated by a few syntactic hacks!" Sure, that was then, this is now. Gone are the days when Visual Studio solution files, project files, "AssemblyInfo" files and resource files tag along to make this excerpt into a fully fledge project. In fact, ditching Visual Studio has been raging on for over a year. What's better is it's sanctioned by Microsoft.

However, it wasn't until recently that the paired down core CLR was available on a platform other than Windows.

