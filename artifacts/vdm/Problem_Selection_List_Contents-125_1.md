---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Problem_Selection_List_Contents-125_1 

 property | value 
--- | --- 
 id | Problem_Selection_List_Contents-125_1
 fmId | 125.1
 label | Problem Selection List Contents
 location | ^GMPL(125.1,
 description | {::nomarkdown}This file contains the categories that make up the Problem Selection<br/>Lists defined in file #125.  Each entry links a problem category to<br/>a list, optionally with a subheader and a sequence order.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| list | .01 | List | {::nomarkdown}This is the Problem Selection List which is to contain the problem group<br/>entered in field #1; this group may be assigned a sequence number for<br/>ordering and a subheader as well here.{:/} | POINTER |  | REQUIRED, INDEXED | Problem_Selection_List-125 | 
| sequence | 1 | Sequence | {::nomarkdown}This is a number which will determine the order this group will appear<br/>in the current list; up to two decimal places may be used.{:/} | NUMERIC |  |  |  | 
| category | 2 | Category | {::nomarkdown}This is the category whose problem items are to be included in the current<br/>list; it may have a subheader in this list, and a designated order.{:/} | POINTER |  | INDEXED | Problem_Selection_Category-125_11 | 
| subheader | 3 | Subheader | {::nomarkdown}This is text which will appear in the list as a subheader or title to<br/>this group of problems.  It will have a single blank row between it and<br/>the previous problem group, and it will be underlined.{:/} | STRING |  |  |  | 
| show_problems | 4 | Show Problems | {::nomarkdown}This field controls the initial display of this category in this selection<br/>list.  If set to YES, the problems will automatically be displayed as part<br/>of the list when it is initially built and displayed; if null or NO, the<br/>category must be selected in order to expand the list and show the problems.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:59:48 am</p>{:/}