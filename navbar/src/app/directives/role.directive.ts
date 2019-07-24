import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AclService } from '../services/index';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[ifRole]' })
export class RoleDirective {
  public hasView = false;

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef,
    public aclService: AclService
  ) {
  }
  logic = "and";//and,or
  @Input() set ifRole(data) {

    let condition = true;
    let permissions = data.permissions;
    if (permissions.length == 1) {
      condition = this.aclService.allow(permissions[0]);
    } else {
      if (data.logic && data.logic == 'or') {
        this.logic = 'or';
      }
      if (this.logic == 'and') {
        condition = true;
        for (let i = 0; i < permissions.length; i++) {
          if (!this.aclService.allow(permissions[i])) {
            condition = false;
            break;
          }
        }
      } else {
        condition = false;
        for (let i = 0; i < permissions.length; i++) {
          if (this.aclService.allow(permissions[i])) {
            condition = true;
            break;
          }
        }
      }
    }

    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  @Input() set ifRoleElse(elseRef) {
    if (!this.hasView && elseRef) {
      this.viewContainer.createEmbeddedView(elseRef);
      this.hasView = true;
    }
  }

}