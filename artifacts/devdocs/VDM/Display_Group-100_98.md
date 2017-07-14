---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Display_Group-100_98<br/>
<a name="top"></a>
# Display Group (100.98)
This file allows orders to be clustered in groups other than by package. It is similar in structure to the OPTION File (19).  This allows display groups to be arranged in a hierarchy.  The main entry in this file should be 'ALL SERVICES'.  Other entries should be logically subordinate to the 'ALL SERVICES' entry.

**Global:** ^ORD(100.98,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the display group for a particular kind of order.<br/>The display group generally corresponds to a hospital service or part<br/>of a service. | STRING | INDEXED<br/>REQUIRED | 
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | 1 | This is a list of specific display groups that `belong' to the display<br/>group listed in the NAME field.  (This is similar to menu items in the<br/>OPTION File.) | OBJECT |  | [Member-100_981](#Member-100_981)
**Mixed Name**{::nomarkdown}<pre><code>  mixed_name</code></pre>{:/} | 2 | This field contains a mixed case name for the display group.  The name <br/>should be as short as possible without being obscure.  This name is <br/>primarily intended for use in the windows display of orders. | STRING |  | 
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | 3 | This is an abbreviation for the display group to be used in displays and<br/>reports. | STRING |  | 
**Default Dialog**{::nomarkdown}<pre><code>  default_dialog</code></pre>{:/} | 4 | This is the dialog that will be used as the default definition when<br/>placing quick orders associated with this display group. | POINTER |  | [Order_Dialog-101_41](Order_Dialog-101_41)

## Sub-Files
### <a name="Member-100_981"></a>Member (100.981)

<dl>
<dt>ID</dt><dd>Member-100_981</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | .001 | This is the sequence of the member in the display group for reporting<br/>purposes. | IEN |  | 
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | .01 | This is a display group listed in the NAME field. (This is similar to a<br/>menu item in the OPTION File.) | POINTER | INDEXED<br/>REQUIRED | [Display_Group-100_98](Display_Group-100_98)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}