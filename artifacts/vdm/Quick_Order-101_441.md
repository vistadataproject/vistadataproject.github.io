---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Quick_View-101_44 

<dl>
<dt>id</dt><dd>Order_Quick_View-101_44</dd>
<dt>fmId</dt><dd>101.44</dd>
<dt>label</dt><dd>Order Quick View</dd>
<dt>location</dt><dd>^ORD(101.44,</dd>
<dt>description</dt><dd>The newer CPRS ordering dialogs use a Windows Listview control for<br/>displaying lists of orderable items and quick orders.  Using this control<br/>will help us rely less on custom built controls to handle long lists of<br/>items.  While the Listview control is able to operate on long lists of<br/>items, it must know at the outset how many items are potentially going to<br/>display and must be able to map from any sequence number produced by the<br/>Listview control  to a specific item in the list.  The ORDER QUICK VIEW<br/>file (101.44) provides this mapping.  It maps a subset of orderable items<br/>or quick orders in alphabetical order to specific sequence numbers.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name for the list to be displayed by a Windows Listview<br/>control.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| last_update | 6 | Last Update | {::nomarkdown}The contains the time when the items in the list were last built.{:/} | STRING |  |  |  | 
| quick_order | 10 | Quick Order | {::nomarkdown}This multiple contains the quick orders that belong to a given list.{:/} | [OBJECT] |  |  | [Quick_Order-101_441](#Quick_Order-101_441)  | 
| set_member | 20 | Set Member | {::nomarkdown}This multiple contains the orderable items in a specific subset (lab,<br/>inpatient meds, diets, etc.).{:/} | [OBJECT] |  |  | [Set_Member-101_442](#Set_Member-101_442)  | 

## <a name="Set_Member-101_442"></a>Set_Member-101_442 

<dl>
<dt>id</dt><dd>Set_Member-101_442</dd>
<dt>fmId</dt><dd>101.442</dd>
<dt>label</dt><dd>Set Member</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| set_member | .01 | Set Member | {::nomarkdown}This points to an item in the Orderable Item file (101.43).{:/} | POINTER |  | REQUIRED, INDEXED | Orderable_Items-101_43 | 
| display_text | 2 | Display Text | {::nomarkdown}This is the text that is displayed in the view list.{:/} | STRING |  |  |  | 

## <a name="Quick_Order-101_441"></a>Quick_Order-101_441 

<dl>
<dt>id</dt><dd>Quick_Order-101_441</dd>
<dt>fmId</dt><dd>101.441</dd>
<dt>label</dt><dd>Quick Order</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| quick_order | .01 | Quick Order | {::nomarkdown}This points to a quick order in the Order Dialog file (101.41).{:/} | POINTER |  | REQUIRED, INDEXED | Order_Dialog-101_41 | 
| display_text | 2 | Display Text | {::nomarkdown}This contains the text to display in the view list.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:18:28 am</p>{:/}