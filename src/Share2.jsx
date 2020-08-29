// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  referral?: string,
  href?: string,
  layout?: string,
  showFaces?: boolean,
  colorScheme?: string,
  action?: string,
  lazy?: boolean,
  children?: Node,
  width?: number | string,
  size?: string,
  kidDirectedSite?: boolean,
  handleParse: Function,
};

class Share2 extends PureComponent<Props> {
  static defaultProps = {
    layout: undefined,
    showFaces: undefined,
    colorScheme: undefined,
    action: undefined,
    lazy: undefined,
    size: undefined,
    kidDirectedSite: undefined,
    children: undefined,
    href: undefined,
    referral: undefined,
    width: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href = getCurrentHref(),
      layout,
      colorScheme,
      action,
      showFaces,
      lazy,
      children,
      width,
      size,
      kidDirectedSite,
      referral,
    } = this.props;

    return (
      <div
        className="fb-share-button"
        data-ref={referral}
        data-href={href}
        data-layout={layout}
        data-colorscheme={colorScheme}
        data-action={action}
        data-show-faces={showFaces}
        data-lazy={lazy}
        data-width={width}
        data-size={size}
        data-kid-directed-site={kidDirectedSite}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <Share2
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
