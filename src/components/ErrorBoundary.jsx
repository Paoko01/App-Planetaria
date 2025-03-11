import React, { Component, useState } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>ERROR: Ha ocurrido algo inesperado. Por favor, inténtalo de nuevo más tarde.</div>;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;